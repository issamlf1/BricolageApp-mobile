<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Authentification;

class AuthentificationControleur extends Controller
{
    public function inserer(Request $request)
    {
        // print_r($request->input('username'));
           $authentification = new Authentification;
           $authentification->name=$request->input('name');
           $authentification->prenom=$request->input('prenom');
           $authentification->username=$request->input('username');
           $authentification->email=$request->input('email');
           $authentification->password=$request->input('password');
           $authentification->address=$request->input('address');
           $authentification->type_compte=$request->input('type_compte');
           $authentification->tag=$request->input('tag');
           $authentification->save();
           $data['hello']=$request->input('username');
           return response($data);
   } 

   public function verifier(Request $request){
        // $authentification = new Authentification;  
        $username=$request->input('username');
        $password=$request->input('password');

        $authentification=DB::table('authentifications')->where('username', $username)
                                                        ->where('password', $password)
                                                        ->pluck('username');
        $exist=false;
                foreach($authentification as $auth){
                    if($auth==$username){
                        $exist=true;
                        break;
                    }
                }
            if(!$exist){
                $data['exist']='No';
                return response($data);
            }
            else{
                $data['exist']=$request->input('username');
                return response($data);
            }

    }

    public function get(Request $request){
        $username=$request->input('username');
        $profile=DB::table('authentifications')->where('username', $username)->first();


        $i=0;
        foreach($profile as $auth){
                $data[$i]=$auth;
                $i++;
        }
        return response($data);
    }

    public function update(Request $request){
        $id=$request->input('id');
        $profile=DB::table('authentifications')->where('id', $id)
        ->update([    'name' => $request->input('name'),     'prenom' => $request->input('prenom')
                    , 'username' => $request->input('username'), 'email' => $request->input('email')
                    , 'password' => $request->input('password'), 'address' => $request->input('address')
                    , 'type_compte' => $request->input('type_compte'), 'tag' => $request->input('tag')   ]);

        $getprofile=DB::table('authentifications')->where('id', $id)->first();


        $i=0;
        foreach($getprofile as $auth){
                $data[$i]=$auth;
                $i++;
        }
        return response($data);
    }
}
