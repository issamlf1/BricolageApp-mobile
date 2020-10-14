<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Anonce extends Model
{
    protected $table = 'anonces';
    protected $fillable = ['username','titre_anonce','tag','tel','description','prix','metier'];

    // public function authentification(){
    //     return $this->belongsTo(Authentification::class);
    // }

    // public function anoncedemanders(){
    //     return $this->hasMany(AnonceDemander::class);
    // }
}
