export const HOMEBREW_CATEGORIES: HomebrewCategory[] = [
    {
        name: "Trasfondos",
        text: "Un trasfondo es una representación a grandes rasgos de quién fue o quién es tu personaje antes de tomar la decisión de convertirse en aventurero.",
        routeTo: "./homebrew/backgrounds"
    }
]

interface HomebrewCategory {
    name: string,
    text: string,
    routeTo: string
}