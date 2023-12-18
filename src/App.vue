<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

  <h1 class="title" style="text-align:center">My Top 3 Anime</h1>

  &nbsp;

 
  <RouterLink to="/beel" class="b1">Beelzebub</RouterLink>
  <RouterLink to="/fate" class="b2">Fate Series</RouterLink>
  <RouterLink to="/jojo" class="b3">JoJo</RouterLink>
  
  <RouterView/>
</template>

<style>
  .title{
    font-family: 'Courier New', monospace;
    color: aqua;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }

  .b1{
    font-size: 25px;
    background-image: url(BabyBeel.jpg);
    color: green;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    border: 3px solid green;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    width: 200px;
    height: 50px;
    position: absolute;
    left: 24%;
    top: 19%; 
    transition: ease-out 0.25s;
  }

  .b1:hover{
    width: 205px;
    height: 55px;
    transition: ease-in 0.25s;
    color: white;

  }

  .b2{
    font-size: 25px;
    background-image: url(fgo.png);
    color: aquamarine;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    border: 3px solid red;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    width: 200px;
    height: 50px;
    position: absolute;
    left: 43%;
    top: 19%; 
    transition: ease-out 0.25s;
  }

  .b2:hover{
    width: 200px;
    height: 55px;
    transition: ease-in 0.25s;
    color: white;
  }

  .b3{
    font-size: 25px;
    background-image: url(jojo.png);
    color: yellow;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    border: 3px solid goldenrod;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    width: 200px;
    height: 50px;
    position: absolute;
    right: 24%;
    top: 19%; 
    transition: ease-out 0.25s;
  }

  .b3:hover{
    width: 205px;
    height: 55px;
    transition: ease-in 0.25s;
    color: white;
  }
</style>