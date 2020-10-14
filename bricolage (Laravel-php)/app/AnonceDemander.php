<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnonceDemander extends Model
{
    //
    protected $table = 'anonce_demanders';
    protected $fillable = ['specialiste_username','titre_anonce','client_username','prix_negociable','etat_demande'];

    // public function anonce(){
    //     return $this->belongsTo(Anonce::class);
    // }
}
