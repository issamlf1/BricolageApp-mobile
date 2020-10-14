<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\AnonceDemander;
use App\Anonce;
use App\Authentification;



class AnoncesDemandesControleur extends Controller
{
    public function inserer(Request $request)
    {
           $anonceDemander = new AnonceDemander;
           $anonceDemander->specialiste_username=$request->input('specialiste_username');
           $anonceDemander->titre_anonce=$request->input('titre_anonce');
           $anonceDemander->client_username=$request->input('client_username');
           $anonceDemander->prix_negociable=$request->input('prix_negociable');
           $anonceDemander->etat_demande="waiting";
           echo $anonceDemander->save();

           return response("Nouvelle demande d'annonce est ajoutée !");
        } 

    public function get(Request $request){
        $username=$request->input('username');
        
        $compte=DB::table('authentifications')->where('username', $username)->pluck('type_compte');
        $type_compte=$compte[0];
        // echo $type_compte;

        if($type_compte=='specialiste')
            $profile=DB::table('anonce_demanders')->where('specialiste_username', $username)
                                                ->orWhere([['client_username', $username],['etat_demande','waiting']])->get();
        else
            $profile=DB::table('anonce_demanders')->where([['client_username', $username],['etat_demande','waiting']])->get();
        $i=0;
        // $data[]=0;
        foreach($profile as $auth){
                $data[$i]=$auth;
                $i++;
        }
        return response($data);
    }
}
