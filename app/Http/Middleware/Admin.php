<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->hasSession() || !$request->user()) {
            return $next($request);
        }
        if ($request->user()->isAdmin == 1) {
            return $next($request);
        }
        return response()->json([
            'message' => 'Not Authorized'
        ], 401);
        //return $next($request);
    }
}
