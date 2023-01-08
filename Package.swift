// swift-tools-version: 5.7
import PackageDescription

let package = Package(
    name: "AboutMe",
    defaultLocalization: "en",
    platforms: [ .macOS(.v12), .iOS(.v15) ],
    products: [
        .library(name: "AboutMe", targets: ["AboutMe"]),
    ],
    dependencies: [
        .package(url: "https://github.com/jectivex/JXBridge.git", from: "0.1.15"),
        .package(url: "https://github.com/jectivex/JXSwiftUI", from: "0.1.12"),
    ],
    targets: [
        .target(name: "AboutMe", dependencies: [
            .product(name: "JXBridge", package: "JXBridge"),
            .product(name: "JXSwiftUI", package: "JXSwiftUI"),
        ], resources: [
            .process("Resources"),
            .copy("jx"),
        ]),
    ]
)

