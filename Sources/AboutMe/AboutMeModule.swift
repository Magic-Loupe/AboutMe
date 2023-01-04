import Foundation
import JXBridge
import JXKit
import JXSwiftUI

public extension JXNamespace {
    static let aboutme: JXNamespace = "aboutme"
}

public struct AboutMeModule: JXModule {
    public var namespace: JXNamespace = .aboutme

    public static let localURL = URL(string: "jxmodule", relativeTo: Bundle.module.resourceURL)
    public static let remoteURL = URL(string: "Sources/AboutMe/jxmodule", relativeTo: URL(string: "https://github.com/Magic-Loupe/AboutMe.git"))

    public func register(with registry: JXRegistry) throws {
        try registry.register(JXSwiftUI())

        if let localURL = Self.localURL {
            //try registry.registerModuleScript(resource: "/PetStoreView.js", root: localURL, namespace: namespace)
        }
    }
}
