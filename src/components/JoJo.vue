<template>
    <h1 class="jjtitle" style="text-align:center">Jojo's Bizarre Adventures</h1>
    <img class="sc" src="https://images6.alphacoders.com/833/833684.png" alt="Stardust Crusaders">
    <img class="gg" src="https://images5.alphacoders.com/108/1081460.jpg" alt="Giorno Experience">
    <img class="jjcs" src="https://images3.alphacoders.com/774/774479.png" alt="Joseph Caesar">
</template>

<style>
    .jjtitle{
        color: gold;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
        position: absolute;
        top: 8%;
        left: 35%;
    }

    .sc{
        height: 50%;
        width: 30%;
        position: absolute;
        left: 2%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .sc:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid rgb(197, 131, 16);
        border-radius: 30px;
    }

    .gg{
        height: 50%;
        width: 30%;
        position: absolute;
        left: 35%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .gg:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid gold;
        border-radius: 30px;
    }

    .jjcs{
        height: 50%;
        width: 30%;
        position: absolute;
        right: 2%;
        top: 33%;
        border-radius: 20px;
        transition: ease-out 0.25s;
    }

    .jjcs:hover{
        top: 30%;
        transition: ease-in-out 0.25s;
        border: 3px solid rgb(168, 238, 48);
        border-radius: 30px;
    }
</style>