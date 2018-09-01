class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
    // console.log(this.startDate.getUTCFullYear());
    // console.log(this.startDate.getFullYear(););
}
  startDate() {
    return Date()
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getUTCFullYear();
  }
}

class Route{
  constructor(startBlock, endBlock){
    this.startBlock = startBlock;
    this.endBlock = endBlock;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    // console.log(eastWest);
    // console.log(this.startBlock.horizontal);
    let horizontalBlocks = Math.abs(eastWest.findIndex(x => x == this.startBlock.horizontal) - eastWest.findIndex(x => x == this.endBlock.horizontal));
    // console.log(eastWest.findIndex(x => x == this.endBlock.horizontal));
    // console.log(eastWest.findIndex(x => x == this.startBlock.horizontal));
    let verticalBlocks =  Math.abs(this.startBlock.vertical - this.endBlock.vertical);
    // console.log(eastWest.findIndex(x => this.startBlock.horizontal));
    // console.log(this.startBlock + this.endBlock);
    // console.log(horizontalBlocks);
    // console.log(verticalBlocks);
    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(optionalArg = 0){
    // console.log(this.blocksTravelled());
    if (optionalArg === 0){
      return this.blocksTravelled() / 3;
    }else{
      return this.blocksTravelled() / 2;
    }
  }

  // estimatedTime(peak){
  //   return this.blocksTravelled() / 2;
  // }
}
