##knight-shortest-path

### Description

The project calculates a shortest path, which a **knight** can follow between two cells on the chessboard.

#### Setup

* Clone the project
* Run the *npm install* command to install all dependencies
* Run *npm start* to run the *lite-server* instance
* Open a *http://localhost:3000* url in your browser

#### Usage

On two left click on cells (starting and finishing positions), the calculation of an algorithm fires.
Each time you select new positions, the path will be recalculated.

The result shows up:

* Starting position with index of 0;
* Finishing position with index of amount of steps needed to reach it;
* The traced route from start to finish;


#### Used technologies
Application's been made using:

* TypeScript
* SystemJS
* Jasmine
* Karma
* Sass
* BEM

#### Application directory Layout

```
css/
  sass/
    modules/
      chessboard.scss   --> chessboard module
    app.scss            --> primary Sass file
js/
  src/
    Chessboard.ts  	    --> build a chessboard (table DOM element) and im-memory two-dimensional matrix that reflects the table
    index.ts            --> main app script (unites other pieces)
    Knight.ts       	--> possible knight moves configuration
    PathFinder.ts       --> shortest path finder
  test/
    Chessboard.spec.ts
    Knight.spec.ts
    PathFinder.spec.ts
index.html              --> the main html
```

##### Who do I talk to?

Should you have any questions or seek further clarifications, please feel free to contact me at andrii.maglovanyi@gmail.com
