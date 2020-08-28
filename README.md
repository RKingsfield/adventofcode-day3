## Description

[Advent of Code](adventofcode.com/2019) is a series of coding challenges. This repo is designed to solve the problem specified in [day 3](https://adventofcode.com/2019/day/3).

## Primer

For Day 3 of Advent of Code, the problem involves mapping and finding minimum routes. First, you need to find the Manhattan distance to the closest intersection of two wires. Second, you need to find the minimum steps taken by both wires.

## Usage

Run the node server with:

```bash
$ npm run start
```

Unit tests can be run with: 

```bash
$ npm run test
```

Once running, you can access the endpoints from http://localhost:3000/wires/.

After you've posted a wire configuration to the server, it will automatically calculate both solutions and return the results to you, as well as with any other wire pairs.

## TODO
* Update endpoints to only generate solutions when that specific wire pair is selected.
* Tidy up project structure.
* Improve testing to work on smaller methods.
* Dockerise project.