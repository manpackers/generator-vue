![npm](https://img.shields.io/npm/v/@manpacker/generator-vue.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@manpacker/generator-vue.svg)
![npm](https://img.shields.io/npm/dw/@manpacker/generator-vue.svg)
![NPM](https://img.shields.io/npm/l/@manpacker/generator-vue.svg)
<br><br>
![nodei.co](https://nodei.co/npm/@manpacker/generator-vue.png?downloads=true&downloadRank=true&stars=true)
<br>
# Explain
@manpacker/generator-vue is a set of build engine based on [@manpacker/generator](https://www.npmjs.com/package/@manpacker/generator) to build engine package.<br>
Entry file supported file extension <code>js</code> or <code>ts</code><br>
Support for multi-portal file build, Files must be in the build <code>root</code> directory.<br>

# Consult
[@manpacker/generator](https://github.com/manpackers/generator#readme)

# Install
```
npm i @manpacker/generator-vue -D
```
# Usage
## CLI
Start the local development environment.
```
manpacker-vue server
```
```
manpacker-vue server --ic [value] -c [config] --port [number]
```
Construction of production environment engineering project.
```
manpacker-vue build
```
```
manpacker-vue build --ic [value] -c [config]
```

## .manpackeric
Default root file name: <code>.manpackeric</code><br>
Configuration item description:<br>
Expand: <br>

|name|type|value|description|
|----|----|-----|-----------|
|isVueProvide|boolean|default: true|Automatically provide <code>Vue</code> references|
|isComponentModel|boolean|default: false|Whether or not references are automatically <code>vue-class-component</code> provided.|

> isVueProvide
```
{ isVueProvide: false }
```
Every file need import Vue from 'vue'

> isComponentProvide
```
{ isComponentProvide: true }
```
Every file no need: <s>import Component from 'vue-class-component'</s>
Global varable <code>Component</code>

## Npm
[link](https://www.npmjs.com/package/@manpacker/generator-vue)
