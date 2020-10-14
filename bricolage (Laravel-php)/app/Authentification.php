<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Authentification extends Model
{
    protected $table = 'authentifications';
    protected $fillable = ['name','prenom','username','email','password','address','type_compte','tag'];

    // public function anonces(){
    //     return $this->hasMany(Anonce::class);
    // }
}
