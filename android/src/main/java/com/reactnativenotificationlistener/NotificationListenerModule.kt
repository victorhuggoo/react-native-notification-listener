package com.reactnativenotificationlistener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class NotificationListenerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NotificationListener"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun multiply(a: Int, b: Int, promise: Promise) {
      promise.resolve(a * b)
    }

    @ReactMethod
    fun sum(a: Int, b: Int, promise: Promise) {
      promise.resolve(a+b)
    }

    @ReactMethod
    fun min(a: Int, b: Int, promise: Promise) {
      promise.resolve(a-b)
    }

    @ReactMethod
    fun fullName(name: String, promise: Promise) {
      var nome: String = " Rosá"
      promise.resolve(name + nome)
    }
}
