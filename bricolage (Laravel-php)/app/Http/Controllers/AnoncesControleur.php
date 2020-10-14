<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Anonce;
use App\AnonceDemander;
use App\Authentification;

class AnoncesControleur extends Controller
{
    public function inserer(Request $request)
    	{
	   		$anonce = new Anonce;
	   		$anonce->username=$request->input('username');
	   		$anonce->titre_anonce=$request->input('titre_anonce');
	   		$anonce->tag=$request->input('tag');
	   		$anonce->tel=$request->input('tel');
	   		$anonce->description=$request->input('description');
	   		$anonce->prix=$request->input('prix');
	   		$anonce->etat='null';
	   		$anonce->save();
			   
			echo "Nouvelle annonce est ajoutée !";
			} 

	public function getAll(){
        $profile=DB::table('anonces')->select('*')->get();


        $i=0;
        foreach($profile as $auth){
                $data[$i]=$auth;
                $i++;
        }
        return response($data);
	}
	
	public function get(Request $request){
		$username=$request->input('username');
		
		$compte=DB::table('authentifications')->where('username', $username)->pluck('type_compte');
		$type_compte=$compte[0];
		
		
		if($type_compte=='specialiste')
			// $profile=DB::table('anonces')->select('*')->get();
			$profile=DB::table('anonces')->where('etat', '<>', 'accepté')->get();
		else if($type_compte=='client')
			$profile=DB::table('anonces')->where([['username', $username],['etat', '<>', 'accepté']])->get();
		$i=0;
		foreach($profile as $auth){
				$data[$i]=$auth;
				$i++;
		}
		return response($data);
	}
	
	public function ajouter(Request $request){
		$id=$request->input('id');
		$client_username=$request->input('client_username');
		$titre_anonce=$request->input('titre_anonce');
		$etat=$request->input('etat');
		DB::table('anonce_demanders')->where('id', $id)
							  ->update(['etat_demande' => $etat]);
		DB::table('anonces')->where([['username', $client_username],['titre_anonce', $titre_anonce]])
      						  ->update(['etat' => $etat]);
		echo " etat est ".$etat;
	}
}
