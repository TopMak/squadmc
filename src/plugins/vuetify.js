import Vue from "vue";
import {
  Vuetify,
  VApp,
  VBadge,
  VBtn,
  VBtnToggle,
  VCard,
  VDialog,
  VDivider,
  VForm,
  VGrid,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VSelect,
  VSlider,
  VSpeedDial,
  VSwitch,
  VTextField,
  VToolbar,
} from "vuetify";


require("vuetify/src/stylus/app.styl");

Vue.use(Vuetify, {
  components: {
    VApp,
    VBadge,
    VBtn,
    VBtnToggle,
    VCard,
    VDialog,
    VDivider,
    VForm,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VSelect,
    VSlider,
    VSpeedDial,
    VSwitch,
    VTextField,
    VToolbar,
  },
});
