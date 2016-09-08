# File Extension API
A File extension classification API because it didn't exists

## install

```
npm install
npm run start
```
Navigate to ```http://localhost:3000/v1/files``` to see all available files

## api

All available routes are using the ```/v1``` prefix for versioning. If you want to access a names resource you'll have to use for example ```/v1/names```

- ```/files``` : show all available files
- ```/names``` : show all available extensions name
- ```/classifications``` : show all extensions categories
- ```/companies``` : show all stored companies
- ```/search/name/:name``` : search extensions for a specified extension name
- ```/search/company/:company``` : search extensions for a specified company name
- ```/search/association/:association``` : search extensions for a specified associated project
- ```/search/classification/:classification``` : search extensions for a specified category

## credits

- Thanks to [FilExt](http://filext.com/) for providing the raw data
- Thanks to [TJ Holowaychuk](https://github.com/tjholowaychuk) for Koa

[@FlyersWeb](https://www.flyers-web.org)