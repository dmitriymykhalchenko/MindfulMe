package com.mindfulme;

import com.facebook.react.ReactActivity;
//import com.crashlytics.android.Crashlytics;
//import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "MindfulMe";
  }
}
//  Button crashButton = new Button(this);
//crashButton.setText("Crash!");
//        crashButton.setOnClickListener(new View.OnClickListener() {
//public void onClick(View view) {
////        Fabric.with(this, new Crashlytics());
//        Crashlytics.getInstance().crash(); // Force a crash
//        }
//        });
//
//        addContentView(crashButton, new ViewGroup.LayoutParams(
//        ViewGroup.LayoutParams.MATCH_PARENT,
//        ViewGroup.LayoutParams.WRAP_CONTENT));
//
//        Crashlytics.setString(key, "foo" /* string value */);
//
//        Crashlytics.setBool(key, true /* boolean value */);
//
//        Crashlytics.setDouble(key, 1.0 /* double value */);
//
//        Crashlytics.setFloat(key, 1.0f /* float value */);
//
//        Crashlytics.setInt(key, 1 /* int value */);
//
//        Crashlytics.log(Log.DEBUG, "tag", "message");
//        Crashlytics.log("message");
//
//        Crashlytics.setUserIdentifier("user12031991");
//
//        try {
//        methodThatThrows();
//        } catch (Exception e) {
//        Crashlytics.logException(e);
//        // handle your exception here
//        }