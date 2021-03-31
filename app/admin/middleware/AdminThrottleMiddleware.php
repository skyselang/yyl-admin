<?php
/*
 * @Description  : 请求频率限制中间件
 * @Author       : https://github.com/skyselang
 * @Date         : 2020-05-22
 * @LastEditTime : 2021-03-27
 */

namespace app\admin\middleware;

use Closure;
use think\Request;
use think\Response;
use think\facade\Config;
use app\common\cache\AdminThrottleCache;

class AdminThrottleMiddleware
{
    /**
     * 处理请求
     *
     * @param Request $request
     * @param Closure $next
     * @return Response
     */
    public function handle($request, Closure $next)
    {
        $throttle = Config::get('admin.throttle');
        $number   = $throttle['number'];
        $expire   = $throttle['expire'];

        if ($number > 0 && $expire > 0) {
            $admin_admin_id = admin_admin_id();
            $menu_url       = request_pathinfo();

            if ($admin_admin_id && $menu_url) {
                $count = AdminThrottleCache::get($admin_admin_id, $menu_url);

                if ($count) {
                    if ($count >= $number) {
                        AdminThrottleCache::del($admin_admin_id, $menu_url);
                        exception('你的操作过于频繁', 429);
                    } else {
                        AdminThrottleCache::inc($admin_admin_id, $menu_url);
                    }
                } else {
                    AdminThrottleCache::set($admin_admin_id, $menu_url, $expire);
                }
            }
        }

        return $next($request);
    }
}