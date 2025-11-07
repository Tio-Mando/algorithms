
/**
 * Contador de Frecuencia de Palabras
 * 
 * Descripción: Implementa funciones para analizar texto y contar la frecuencia de palabras.
 * El sistema debe limpiar texto, dividirlo en palabras válidas, contar frecuencias y generar reportes.
 * Dificultad: BEGINNER
 * 
 * Funciones requeridas:
 * - countWordFrequency(text): Cuenta frecuencia de palabras
 * - getTopWords(frequencyMap, limit): Obtiene palabras más frecuentes
 * - filterCommonWords(frequencyMap, commonWords): Filtra palabras comunes
 * - generateWordReport(text, options): Genera reporte completo
 */

const { transform } = require("@babel/core");

/**
 * Cuenta la frecuencia de palabras en el texto
 * @param {string} text - Texto a analizar
 * @returns {Object} Objeto con palabras como claves y frecuencias como valores
 */

let texto = "Hello, world! How are you? I'm fine.";


function countWordFrequency(text) {


    // TODO: Implementar conteo de frecuencia de palabras
    // Pista 1: Limpiar el texto (eliminar puntuación, convertir a minúsculas)
    text = text.toLowerCase()
    text = text.replaceAll('.', '')
    text = text.replaceAll(',', '')
    text = text.replaceAll('!', '')
    text = text.replaceAll('?', '')
    text = text.replaceAll(/'/g, '')
    console.log(text)
    console.log(text.length)
    // console.log(text.length)
    // Pista 2: Dividir el texto en palabras válidas (mínimo 2 caracteres)

    let arryText = []
    if (text.length >= 2) {
        arryText = text.split(' ')
    } else {
        return {}
    }
    // console.log(arryText)

    // Pista 3: Filtrar palabras que solo contengan letras y números

    arryText = arryText.filter(cosa => cosa !== '')

    for (let i = 0; i < arryText.length; i++) {
        if (arryText[i].includes('-')) {
            let ind = arryText[i].indexOf('-')
            console.log(ind, 'ind')
            arryText.splice(i, 1)
            console.log(arryText.splice(i, 1), 'aqui se ve que paso')
        }
    }



    // Pista 4: Usar un objeto para contar frecuencias
    let count = 0
    let objFinal = {}
    for (let j = 0; j < arryText.length; j++) {
        for (let i = 0; i < arryText.length; i++) {
            if (arryText[j] === arryText[i]) {
                count++

            }
            if (arryText[j].length >= 2) {
                {
                    objFinal[arryText[j]] = count
                }
            }
            // console.log(arryText[j])
        }
        count = 0
    }

    console.log(objFinal)
    console.log('aqui termina la primera parte------------------')
    console.log(' ')
    console.log(' ')
    console.log(' ')
    // Pista 5: Retornar el objeto con las frecuencias
    return objFinal
    // throw new Error('Función countWordFrequency no implementada');
}

countWordFrequency(texto)

/**
 * Obtiene las palabras más frecuentes ordenadas por frecuencia
 * @param {Object} frequencyMap - Mapa de frecuencias
 * @param {number} limit - Número máximo de palabras a retornar
 * @returns {Array} Array de objetos {word, frequency} ordenados por frecuencia
 */

const frequencyMap = {
    hello: 3,
    world: 1,
    javascript: 2,
    programming: 1,
}

function getTopWords(frequencyMap, limit = 10) {
    // TODO: Implementar obtención de palabras más frecuentes
    // Pista 1: Validar que frequencyMap sea un objeto válido
    if (Object.prototype.toString.call(frequencyMap) === '[object Object]') {
        console.log('al parecer es un objeto')
    } else {
        console.log(null)
        return null
    }
    // Pista 2: Convertir el objeto a array con Object.entries()
    let arryOfArrys = Object.entries(frequencyMap)
    console.log(arryOfArrys)
    // Pista 3: Mapear a objetos {word, frequency}
    let arryOfObj = {}

    for (let i = 0; i < arryOfArrys.length; i++) {
        arryOfArrys[i] = { word: arryOfArrys[i][0], frequency: arryOfArrys[i][1] }
    }
    console.log(arryOfArrys)
    // Pista 4: Ordenar por frecuencia descendente (mayor a menor)
    for (let i = 0; i < arryOfArrys.length; i++) {
        let trash = arryOfArrys.splice(i, 1)
        for (let j = 0; j < arryOfArrys.length; j++) {
            if (trash.frequency >= arryOfArrys[j].frequency){
                arryOfArrys.splice(j,0, trash)
            }else{
                arryOfArrys.splice(i,0, trash)
            }
        }
    }
    console.log(arryOfArrys)
    // Pista 5: En caso de empate, ordenar alfabéticamente
    // Pista 6: Limitar resultados con slice()
    // Pista 7: Retornar el array ordenado

    // throw new Error('Función getTopWords no implementada');
}

getTopWords(frequencyMap, 3)



/**
 * Filtra palabras comunes del mapa de frecuencias
 * @param {Object} frequencyMap - Mapa de frecuencias
 * @param {Array} commonWords - Array de palabras comunes a filtrar
 * @returns {Object} Nuevo mapa sin las palabras comunes
 */
function filterCommonWords(frequencyMap, commonWords = []) {
    // TODO: Implementar filtrado de palabras comunes
    // Pista 1: Validar que frequencyMap sea un objeto válido
    // Pista 2: Validar que commonWords sea un array
    // Pista 3: Crear un nuevo objeto para el resultado
    // Pista 4: Iterar sobre las entradas del mapa de frecuencias
    // Pista 5: Verificar si cada palabra está en commonWords (case-insensitive)
    // Pista 6: Solo agregar palabras que NO estén en commonWords
    // Pista 7: Retornar el nuevo objeto filtrado

    throw new Error('Función filterCommonWords no implementada');
}

/**
 * Genera un reporte completo de análisis de palabras
 * @param {string} text - Texto a analizar
 * @param {Object} options - Opciones del reporte
 * @returns {Object} Reporte completo con estadísticas
 */
function generateWordReport(text, options = {}) {
    // TODO: Implementar generación de reporte completo
    // Pista 1: Extraer opciones con valores por defecto (limit, filterCommon, commonWords)
    // Pista 2: Contar frecuencia de todas las palabras usando countWordFrequency()
    // Pista 3: Contar total de palabras y palabras únicas
    // Pista 4: Aplicar filtro de palabras comunes si filterCommon es true
    // Pista 5: Obtener palabras más frecuentes usando getTopWords()
    // Pista 6: Calcular estadísticas adicionales (palabras filtradas, frecuencia promedio)
    // Pista 7: Retornar objeto con todas las estadísticas

    throw new Error('Función generateWordReport no implementada');
}

module.exports = {
    countWordFrequency,
    getTopWords,
    filterCommonWords,
    generateWordReport
};
