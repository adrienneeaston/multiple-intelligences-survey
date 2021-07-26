'use strict'

// let UserInfo = function (first, last, birthdate, testdate) {
//   this.firstName = first;
//   this.lastName = last;
//   this.birthDate = birthdate;
//   this.testDate = testdate;
// };

class User {
  constructor (body) {
    const { firstname, lastname } = body;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = null;
    this.testdate = null;
  }
}

// let IqType = function (qvalue, category, index, filepath) {
//   this.qvalue = qvalue;
//   this.category = category;
//   this.index = index;
//   this.filepath = filepath;
//   testQuestions.push(this);
// };

// let IqResults = function (linguistCount, logicCount, musicalCount, bodilyCount, spatialCount, interCount, intraCount) {
//   this.linguistCount = linguistCount;
//   this.logicCount = logicCount;
//   this.musicalCount = musicalCount;
//   this.bodilyCount = bodilyCount;
//   this.spatialCount = spatialCount;
//   this.interCount = interCount;
//   this.intraCount = intraCount;
// }

class Result {
  contstructor (linguistCount, logicCount, musicalCount, bodilyCount, spatialCount, interCount, intraCount) {
    this.linguist = linguistCount;
    this.logic = logicCount;
    this.musical = musicalCount;
    this.bodily = bodilyCount;
    this.visual = spatialCount;
    this.inter = interCount;
    this.intra = intraCount;
  }
}

module.exports = {
  User,
  Result,
}