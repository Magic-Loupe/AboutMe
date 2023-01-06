import JXKit
import JXSwiftUI
import SwiftUI

public struct AboutMeView: View {
    private let context: JXContext?
    @Environment(\.dismiss) private var dismiss

    public init(context: JXContext? = nil) {
        self.context = context
    }
    
    public var body: some View {
        NavigationView {
            JXView(context: context) { context in
                try context.registry.register(AboutMeModule())
                return try context.new("aboutme.ContentView")
            }
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button(action: { dismiss() }) {
                        Image(systemName: "xmark.circle.fill")
                    }
                }
            }
        }
    }
}
