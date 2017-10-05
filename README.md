# React Parallax Mousemove
A simple react wrapper component which takes an arbitrary number of children as layers. Layers are affected by the position of the mouse pointer in relation to the center of the window. This project was inspired by react-springy-parallax.

## Getting Started

Clone repo

````
git clone https://github.com/adamwade2384/react-parallax-mousemove.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Usage

`import ParallaxMousemove from 'react-parallax-mousemove'`

The library provides you with two (2) components - A container component and layer component(s). The container component ParallaxMousemove takes the ParallaxMousemove.Layer component as children.

  ```
  <ParallaxMousemove>
    <ParallaxMousemove.Layer></ParallaxMousemove.Layer>
    <ParallaxMousemove.Layer></ParallaxMousemove.Layer>
  </ParallaxMousemove>
  ```

The props for each component is as follows:

### Container Component

| prop | type | required  |
| ------ | ------ | -----: |
|  containerStyle  |  Obj  |   optional  |
|  fullHeight  |  Bool  |   optional  |

### Layer Component

| prop | type | required  |
| ------ | ------ | -----: |
|  config  |  Obj  |   required  |

### Layer Configuration Options

| option | type | description  |
| ------ | ------ | ----- |
|  xFactor  |  Int  |   A percentage of the mousemove distance from the center of the screen on the x axis  |
|  yFactor  |  Int  |   A percentage of the mousemove distance from the center of the screen on the y axis  |
|  springSettings  |  Obj  |   The spring configuration settings for react-motion.  |

### Spring Settings object

| option | type | description  |
| ------ | ------ | ----- |
|  stiffness  |  Int  |   The response and speed of layers in relation to mouse movements  |
|  damping  |  Int  |  The spring and rebound of layers in relation to mouse movements |
