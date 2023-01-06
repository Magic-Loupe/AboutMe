import Foundation
import JXBridge
import JXKit
import JXSwiftUI

public extension JXNamespace {
    static let aboutme: JXNamespace = "aboutme"
}

public struct AboutMeModule: JXDynamicModule {
    public var namespace: JXNamespace = .aboutme

    public static let localURL = URL(string: "jxmodule", relativeTo: Bundle.module.resourceURL)!
    public static let remoteURL = URL(string: "Sources/AboutMe/jxmodule", relativeTo: URL(string: "https://github.com/Magic-Loupe/AboutMe.git"))!

    public func register(with registry: JXRegistry) throws {
        try registry.register(JXSwiftUI())
        try registry.registerBridge(for: Info.self, namespace: namespace)
        try registry.registerModuleScript(resource: "/ContentView.js", root: Self.localURL, namespace: namespace)
    }

    public func initialize(in context: JXContext) throws {
        try context.global.setProperty("information", information)
    }
}

extension Info: JXStaticBridging {
    static func jxBridge() throws -> JXBridge {
        JXBridgeBuilder(type: Info.self)
            .var.image { \.image }
            .var.name { \.name }
            .var.story { \.story }
            .var.hobbies { \.hobbies }
            .var.foods { \.foods }
            .var.colors { \.colors }
            .var.funFacts { \.funFacts }
            .bridge
    }
}
