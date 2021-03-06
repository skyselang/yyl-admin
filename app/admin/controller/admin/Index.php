<?php
/*
 * @Description  : 控制台
 * @Author       : https://github.com/skyselang
 * @Date         : 2020-05-05
 * @LastEditTime : 2021-07-15
 */

namespace app\admin\controller\admin;

use think\facade\Request;
use app\common\service\admin\IndexService;
use app\common\service\cms\ContentService;
use app\common\service\MemberService;
use hg\apidoc\annotation as Apidoc;

/**
 * @Apidoc\Title("控制台")
 * @Apidoc\Group("admin")
 * @Apidoc\Sort("01")
 */
class Index
{
    /**
     * @Apidoc\Title("首页")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function index()
    {
        $data = IndexService::index();
        $msg  = '后端安装成功，感谢使用，如有帮助，欢迎Star！';

        return success($data, $msg);
    }

    /**
     * @Apidoc\Title("会员统计")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function member()
    {
        $date = Request::param('date/a', []);

        $range = ['total', 'today', 'yesterday', 'thisweek', 'lastweek', 'thismonth', 'lastmonth'];

        $number = [];
        $active = [];
        foreach ($range as $k => $v) {
            $number[$v] = MemberService::statNum($v);
            $active[$v] = MemberService::statNum($v, 'act');
        }
        $data['number']   = $number;
        $data['active']   = $active;
        $data['date_new'] = MemberService::statDate($date);
        $data['date_act'] = MemberService::statDate($date, 'act');

        return success($data);
    }

    /**
     * @Apidoc\Title("内容统计")
     * @Apidoc\Method("GET")
     * @Apidoc\Header(ref="headerAdmin")
     * @Apidoc\Returned(ref="returnCode")
     * @Apidoc\Returned(ref="returnData")
     */
    public function cms()
    {
        $data = ContentService::statistics();

        return success($data);
    }
}
