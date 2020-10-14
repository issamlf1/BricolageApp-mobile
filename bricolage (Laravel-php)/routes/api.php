<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//-------------------AnoncesControleur---------------------------

Route::post('/insererAnonce','AnoncesControleur@inserer');
Route::get('/GetAllAnonce','AnoncesControleur@getAll');  //get les donner de profile d'un user
Route::post('/GetAnonce','AnoncesControleur@get');  //get les donner de profile d'un user
Route::post('/AjouterEtatAnonce','AnoncesControleur@ajouter');  //get les donner de profile d'un user

//-------------------AnoncesDemandesControleur---------------------------

Route::post('/insererAnonceDemander','AnoncesDemandesControleur@inserer');
Route::post('/GetAnonceDemander','AnoncesDemandesControleur@get');  //get les donnees de profile d'un user

//-------------------AuthentificationControleur---------------------------

Route::post('/insererUser','AuthentificationControleur@inserer'); //inserer un user
Route::post('/VerifierUser','AuthentificationControleur@verifier');   //Verifier si un utilisateur est existe
Route::post('/GetUser','AuthentificationControleur@get');  //get les donner de profile d'un user
Route::post('/UpdateUser','AuthentificationControleur@update');  //modifier les donner de profile d'un user





