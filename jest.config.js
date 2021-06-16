module.exports = {
    // 开启覆盖统计功能
    collectCoverage: true,
    // 指定需要覆盖的文件
    collectCoverageFrom: [
        "src/*.js"
    ],
    // 指定输出覆盖统计结果的目录
    coverageDirectory: "test-jest/coverage/",
    // 指定测试脚本
    testMatch: [
        "**/test.js"
    ]
};