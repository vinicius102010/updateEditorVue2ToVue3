<script setup lang="ts">
import Button from "./components/ui/button/Button.vue";
import { Mic } from "lucide-vue-next";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
// import MyTwoButtonsCe from "./components/MyTwoButtons.ce.vue";
</script>

<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <img
          alt="Vue logo"
          src="http://www.sarah.br/media/3462/logo_header.png" />
      </div>
      <div class="col-12"></div>
    </div>

    <div key="row" class="row q-col-gutter-sm justify-center q-my-md">
      <div key="col" class="col-12">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon">
                <Mic></Mic>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p1>Entrada utilizando áudio</p1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</template>
