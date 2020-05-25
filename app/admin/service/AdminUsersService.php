<?php
/*
 * @Description  : 个人中心
 * @Author       : skyselang 215817969@qq.com
 * @Date         : 2020-05-14
 */

namespace app\admin\service;

use app\admin\cache\AdminUserCache;
use think\facade\Db;
use think\facade\Filesystem;

class AdminUsersService
{
    /**
     * 个人信息
     *
     * @param integer $admin_user_id 用户id
     * @return array
     */
    public static function info($admin_user_id)
    {
        $admin_user = AdminUserService::info($admin_user_id);

        $data['admin_user_id'] = $admin_user['admin_user_id'];
        $data['username'] = $admin_user['username'];
        $data['nickname'] = $admin_user['nickname'];
        $data['email'] = $admin_user['email'];

        return $data;
    }

    /**
     * 修改信息
     *
     * @param array $param 用户信息
     * @return array
     */
    public static function edit($param)
    {
        $admin_user_id = $param['admin_user_id'];
        $username = $param['username'];
        $nickname = $param['nickname'];
        $email = $param['email'];

        $admin_user = Db::name('admin_user')
            ->field('admin_user_id')
            ->where('username', $username)
            ->where('admin_user_id', '<>', $admin_user_id)
            ->where('is_delete', 0)
            ->find();
        if ($admin_user) {
            error('账号已存在');
        }

        $data['username'] = $username;
        $data['nickname'] = $nickname;
        $data['email'] = $email;
        $data['update_time'] = date('Y-m-d H:i:s');
        $update = Db::name('admin_user')
            ->where('admin_user_id', $admin_user_id)
            ->update($data);

        if (empty($update)) {
            error();
        }

        AdminUserCache::del($admin_user_id);

        return $param;
    }

    /**
     * 修改密码
     *
     * @param array $param 用户密码
     * @return array
     */
    public static function pwd($param)
    {
        $admin_user_id = $param['admin_user_id'];
        $password = $param['password'];
        $passwords = $param['passwords'];

        $admin_user = Db::name('admin_user')
            ->field('admin_user_id,password')
            ->where('admin_user_id', $admin_user_id)
            ->where('is_delete', 0)
            ->find();
        if (md5($password) == $admin_user['password']) {
            $data['password'] = md5($passwords);
        } else {
            error('原密码错误');
        }

        $data['update_time'] = date('Y-m-d H:i:s');
        $update = Db::name('admin_user')
            ->where('admin_user_id', $admin_user_id)
            ->update($data);

        if (empty($update)) {
            error();
        }

        AdminUserCache::del($admin_user_id);

        return $param;
    }

    /**
     * 更换头像
     *
     * @param array $param 头像信息
     * @return array
     */
    public static function avatar($param)
    {
        $admin_user_id = $param['admin_user_id'];
        $avatar = $param['avatar'];

        $admin_user = Db::name('admin_user')
            ->field('admin_user_id')
            ->where('admin_user_id', $admin_user_id)
            ->where('is_delete', 0)
            ->find();
        if (empty($admin_user)) {
            error('用户不存在');
        }

        $avatar_name = Filesystem::disk('public')
            ->putFile('adminuser', $avatar, function () use ($admin_user_id) {
                return $admin_user_id . '/avatar';
            });

        $update_avatar['avatar'] = 'storage/' . $avatar_name . '?t=' . date('YmdHis');
        $update_avatar['update_time'] = date('Y-m-d H:i:s');
        $res = Db::name('admin_user')
            ->where('admin_user_id', $admin_user_id)
            ->update($update_avatar);

        if (empty($res)) {
            error();
        }

        $admin_user = AdminUserCache::set($admin_user_id);

        return $admin_user;
    }

    /**
     * 日志列表
     *
     * @param array   $where 条件
     * @param string  $field 字段
     * @param integer $page  页数
     * @param integer $limit 数量
     * @param array   $order 排序
     * @return array 
     */
    public static function usersLog($where = [], $page = 1, $limit = 10, $field = '',  $order = [])
    {
        $data = AdminLogService::list($where, $page, $limit, $field, $order);

        return $data;
    }
}