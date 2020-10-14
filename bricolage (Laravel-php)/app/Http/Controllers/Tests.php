<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Anonce;


class Tests extends Controller
{
    public function anonce(Request $request)
    	{
			print_r($request->input('username'));
	   		$anonce = new Anonce;
	   		$anonce->username=$request->input('username');
	   		$anonce->titre_anonce=$request->input('titre_anonce');
	   		$anonce->tag=$request->input('tag');
	   		$anonce->tel=$request->input('tel');
	   		$anonce->description=$request->input('description');
	   		$anonce->prix=$request->input('prix');
	   		echo $anonce->save();
	   } 

	public function name($name){
		return response($name)->json();
	}
}
