module.exports = {
  name: 'mobile',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mobile',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@ionic-native|@ionic)"
  ]
};
