import {STATE} from '../../const/const';

export const navigationMenu = (actualState, screenLoaded, stateLoaded) => {
   if (STATE.getTitle() === actualState) {
      return new Promise((success, error) => {
         if (STATE.getTitle() === actualState) {
            success(() => screenLoaded());
         } else {
            error('Error, Wrong STATE Title');
         }
      }).then(() => {
         if (STATE.getTitle() === actualState) {
            setTimeout(() => {
               STATE.setTitle(stateLoaded);
               screenLoaded();
            }),
            50;
         }
      });
   }
};
