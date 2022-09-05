import React, { useState } from "react";

// tworzymy kontekst
const LanguageContext = React.createContext();


// tworzymy wrapper ktorego uzyjemy na glownym komponencie w _app.js
// przez uzycie Providera wartosci z kontekstu beda dostepne we wszystkich komponentach znajdujacych sie "wewnatrz" tego wrappera.
export const LanguageContextWrapper = ({children}) => {
  // hook useState, raczej powinienes wiedziec jak sie go używa
  const [language, setLanguage] = useState("en");

  // wartosci ktore beda przekazywane w kontekscie.
  // jedna jest "language" a druga funkcja "setLanguage" do zmiany jezyka
  // mozesz sie zastanawiać, dlaczego są same klucze bez wartości i dlaczego to działa
  // podpowiedz: object literal property value shorthand
  const sharedState = {
    language,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={sharedState}>
      {children}
    </LanguageContext.Provider>
  );
}


// hook do wykorzystania w komponentach funkcyjnych który da nam dostep do wartosci z kontekstu
export const useLanguageContext = () => {
  return React.useContext(LanguageContext);
}