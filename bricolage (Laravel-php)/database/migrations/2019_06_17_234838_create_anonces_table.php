<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnoncesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anonces', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username');
            $table->string('titre_anonce');
            $table->string('tag');
            $table->string('tel');
            $table->string('description');
            $table->float('prix');
            $table->string('etat')->default();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anonces');
    }
}
