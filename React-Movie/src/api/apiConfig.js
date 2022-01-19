const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e4115bf3ad9bc122f1d4ae9da85cb6a9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;