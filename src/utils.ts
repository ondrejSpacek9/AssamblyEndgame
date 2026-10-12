import { words } from "./words"

function getRandomIndex(arr: string[]): number {
    return Math.floor(Math.random() * arr.length)
}

export function getRandomWord(): string {
    return words[getRandomIndex(words)]
}

export function getFarewellText(language: string): string {
    const options: string[] = [
        `Sbohem, ${language}`,
        `Adios, ${language}`,
        `Odpočívej v pokoji, ${language}`,
        `Budeš nám chybět, ${language}`,
        `Ach ne, jen ne ${language}!`,
        `${language} to má za sebou`,
        `Odešel, ale nezapomeneme, ${language}`,
        `Konec ${language}, jak ho známe`,
        `Vstříc západu slunce, ${language}`,
        `${language}, bylo to fajn`,
        `${language}, tvoje hlídka skončila`,
        `${language} opustil chat`
    ];

    return options[getRandomIndex(options)];
}