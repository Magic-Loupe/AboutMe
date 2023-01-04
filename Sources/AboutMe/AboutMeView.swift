import JXKit
import JXSwiftUI
import SwiftUI

public struct AboutMeView: View {
    let context: JXContext

    public init(context: JXContext = JXContext()) {
        self.context = context
        do {
            try context.registry.register(AboutMeModule())
        } catch {
            print("AboutMeView: \(error)")
        }
    }

    public var body: some View {
        JXView(context: context) { context in
            try context.new("aboutme.ContentView")
        }
    }
}
