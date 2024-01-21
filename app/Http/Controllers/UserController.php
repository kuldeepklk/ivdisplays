<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function users(Request $request)
    {
        $users = User::all();
        //dd($users);
        //$token = $request->user()->currentAccessToken();

        //$cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'users' => $users
        ]);
    }
}
