<?php
/*
 * @Description  : 内容设置缓存
 * @Author       : https://github.com/skyselang
 * @Date         : 2021-06-17
 * @LastEditTime : 2021-07-13
 */

namespace app\common\cache\cms;

use think\facade\Cache;

class SettingCache
{
    /**
     * 缓存key
     *
     * @param integer $setting_id 设置id
     * 
     * @return string
     */
    public static function key($setting_id = 0)
    {
        $key = 'cms:setting:' . $setting_id;

        return $key;
    }

    /**
     * 缓存设置
     *
     * @param integer $setting_id 设置id
     * @param array   $setting    设置信息
     * @param integer $ttl        有效时间（秒）
     * 
     * @return bool
     */
    public static function set($setting_id = 0, $setting = [], $ttl = 0)
    {
        $key = self::key($setting_id);
        $val = $setting;
        if (empty($ttl)) {
            $ttl = 1 * 24 * 60 * 60 + mt_rand(0, 99);
        }

        $res = Cache::set($key, $val, $ttl);

        return $res;
    }

    /**
     * 缓存获取
     *
     * @param integer $setting_id 设置id
     * 
     * @return array 设置信息
     */
    public static function get($setting_id = 0)
    {
        $key = self::key($setting_id);
        $res = Cache::get($key);

        return $res;
    }

    /**
     * 缓存删除
     *
     * @param integer $setting_id 设置id
     * 
     * @return bool
     */
    public static function del($setting_id = 0)
    {
        $key = self::key($setting_id);
        $res = Cache::delete($key);

        return $res;
    }
}
