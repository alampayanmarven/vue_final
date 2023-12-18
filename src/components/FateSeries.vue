<template>
    <h1 class="ftitle" style="text-align:center">Fate Series</h1>
    <img class="sa" src="https://images7.alphacoders.com/818/818474.jpg" alt="Saber Alter">
    <img class="hassan" src="https://images6.alphacoders.com/785/785661.jpg" alt="Hassan I">
    <img class="ka" src="https://images3.alphacoders.com/607/607023.jpg" alt="King Arthur">
    
</template>

<style>
    .ftitle{
        color: crimson;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
        position: absolute;
        top: 8%;
        left: 44%;
    }

    .sa{
        height: 50%;
        width: 30%;
        position: absolute;
        left: 2%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .sa:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid red;
        border-radius: 30px;
    }

    .hassan{
        height: 50%;
        width: 30%;
        position: absolute;
        left: 35%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .hassan:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid blue;
        border-radius: 30px;
    }

    .ka{
        height: 50%;
        width: 30%;
        position: absolute;
        right: 2%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .ka:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid gold;
        border-radius: 30px;
    }
</style>