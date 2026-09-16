package com.oracle;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.internal.inject.AbstractBinder;
import jakarta.inject.Singleton;

public class MyApplication extends ResourceConfig {
    public MyApplication() {
        // Register ProfileService with the HK2 engine as a Singleton
        register(new AbstractBinder() {
            @Override
            protected void configure() {
                bind(ProfileService.class)
                .to(ProfileService.class)
                .in(Singleton.class);
            }
        });
    }
}
