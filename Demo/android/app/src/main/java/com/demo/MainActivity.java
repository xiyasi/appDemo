package com.demo;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener;
import org.devio.rn.splashscreen.SplashScreen; // <- add this import
public class MainActivity extends ReactActivity {
  private PermissionListener listener;
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Demo";
  }
}
