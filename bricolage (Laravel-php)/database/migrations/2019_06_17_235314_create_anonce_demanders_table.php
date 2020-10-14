<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnonceDemandersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anonce_demanders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('specialiste_username');
            $table->string('titre_anonce');
            $table->string('client_username');
            $table->float('prix_negociable');
            $table->string('etat_demande')->default('waiting');
            $table->timestamps();
            // $table->foreign('client_username')->references('username')->on('anonces');
            // $table->foreign('titre_anonce')->references('titre_anonce')->on('anonces');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anonce_demanders');
    }
}
