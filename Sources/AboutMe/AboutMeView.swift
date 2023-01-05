import JXKit
import JXSwiftUI
import SwiftUI

public struct AboutMeView: View {
    public init() {
    }
    
    public var body: some View {
        JXView { context in
            try context.registry.register(AboutMeModule())
            return try context.new("aboutme.ContentView")
        }
    }
}
