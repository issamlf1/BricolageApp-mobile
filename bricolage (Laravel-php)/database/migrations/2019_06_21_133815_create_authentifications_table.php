<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthentificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authentifications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('prenom');
            $table->string('username')->unique();
            $table->string('email');
            $table->string('password');
            $table->string('address');
            $table->string('type_compte');
            $table->string('tag');
            $table->timestamps();

            // $table->primary(['id', 'username']);	
            // $table->primary('username');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authentifications');
    }
}
