module.exports = {
  name: 'data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
