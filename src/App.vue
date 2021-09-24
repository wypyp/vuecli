<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
@keyframes trload {
  0%   {transform: rotate(0deg);}
  10%  { transform: rotate(36deg);}
  20%  {transform: rotate(72deg);}
  30%  {transform: rotate(108deg);}
  40% {transform: rotate(144deg);}
  50% {transform: rotate(180deg);}
  60% {transform: rotate(216deg);}
  70% {transform: rotate(252deg);}
  80% {transform: rotate(288deg);}
  90% {transform: rotate(324deg);}
  100% {transform: rotate(360deg);}
}
.loading{
  text-align: center;
}
.loading svg {
  animation-name: trload;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
}
</style>