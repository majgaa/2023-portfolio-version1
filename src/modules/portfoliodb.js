import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Longhorn Barbeque Webdesign",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/LonghornWeb.jpeg?alt=media&token=7ae413e2-da5c-4be8-9ca2-dfe1e966a9e6",
      text: "På vores 1. semester eksamen fik vi en case for Longhorn Barbeque competition 2023. Longhorn Barbeque ønskede at fordoble deres besøgstal til deres næste arrengement. De havde ikke nogen aktuel hjemmeside, men brugte facebook og thegrill.dk til at promovere deres begivenhed. Longhorns største udfordring var at lokke flere mennesker til eventet, med deres nuværende indhold. De havde en viking som logo, og de ønskede at bibeholde ham. Vi valgte at designe et nyt logo, og beholde vikingen, men nu fungerende som en mascot. Vores nye logo forestiller en syringol, som er det molekyle der opstår, i en BBQ process. Dertil lavede vi en hjemmeside med et helt anderledes design end udgangspunktet."
    
      
    },

    {
      id: 2,
      title: "Longhorn Barbeque Trifolder",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/LonghornTrifolder.png?alt=media&token=01a20231-7a98-4f05-b68a-3176dff063fe",
      text: "I Longhorn projektet designede vi en trifolder. Denne skulle bruges til at promovere eventet lokalt. Via vores spørgeskema lærte vi hvad folk kommer efter til events, og udfra dette har vi valgt indholdet i trifolderen, netop for at imødekomme gæsterne. "
    },

    {
      id: 3,
      title: "Longhorn Barbeque Trifolder",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/LonghornTrifolder1.png?alt=media&token=960d3af7-f9fa-4ea1-81ce-d4a8c566a4af",
      text: "Dette er bagsiden af trifolderen. Her har vi sat informationer ind omkring tidspunkter og happenings, samt et menukort. Vores mascot, som vi har tegnet i flere forskellige udgaver, er implementeret her i menukortet."
     
    },

    {
      id: 5,
      title: "Organdonation.dk",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/LogoOrgan.png?alt=media&token=021918da-0e9f-4f7e-85c1-77c48c8ff07e",
      text: "Min partner og jeg ønskede at skabe en rebradning af Organdonation.dk, hvor designet skulle rette sig mere mod de unge mennesker. Deres nuværende branding er meget alvorligt (som organdonation er), men dette er også ofte noget, unge mennesker går en stor bue udenom. Tanken bag det var, at når først et ungt menneske har taget stilling, er det sjældent de går ind og skriver sig af listen igen, og på den måde kan vi vokse i den mængde, der har taget stilling. I vores nye logo har vi brugt en lokations pil, som symbolisere at noget får en ny placering, sammen med et hjertecardiogram, der får sin styrke tilbage. Logoet kan bruges som et O i organdonation."
     
    },

    {
      id: 6,
      title: "Organdonation.dk",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/OrganPoster1.png?alt=media&token=8c80af1e-65f4-4f11-ac13-648bf6af697f",
      text: "Til vores rebranding lavede designede vi en poster med glade og lyse farver, med henblik på at skabe blikfang for de unge mennesker. Der er brugt humor, i form af en cool ældre dame, for at løsne den stemning der er forbundet med dette emne. Posteren skal fungere som branding på landets skoler, sammen med en konsulent der tager ud for at tale med de unge og vise dem hvordan man tager stilling til organdonation."
      
    },

    {
      id: 7,
      title: "Foto opgave",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2023-484f1.appspot.com/o/Loulou1.jpg?alt=media&token=232e1b03-593a-4af7-98ce-a472146f6970",
      text: "På uddannelse fik vi til opgave at tage et fotografi og redigere det. Fotoet skulle være en del af en konkurrence imellem alle elever. Jeg valgte at gøre brug af min absolutte favorit model, min datter på 5 år, som altid er klar på at stille sig foran mit kamera. Fotoet er redigeret mod de varme toner, og fremhævning af glimtet i pigens brune øjne."
      
    },
  ])

  return {
    state,
  }
}

export default getPortfolio