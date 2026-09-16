package com.oracle;



import java.util.List;
import java.util.Map;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/v1")

public class MyResource {

	ProfileService service = new ProfileService();
	
	@Path("/welcome/{name}")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String greet(@PathParam("name") String name) {
		return "Hello "+name;
	}
	
	//Response class is used to return response with different status code & content
	// if you use String as a return type then the default status code is 200
	// 201 - created, 204 - no content, 404 - not found, 403 - forbidden, 401 - unauthorized
	// consumes and produces are required to mention the datastructure that is shared between client & server
	// this method doesn't interact with the backend
	// ***** create 3 webservice methods which will save, find all and find based on id 
	// that interacts with the Service layer
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createProfile(Profile profile) {
		// entity method accept content
		Profile profile2 = service.save(profile);
		return Response.status(201).entity(profile2).build();
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProfiles() {
		// entity method accept content
		List<Profile> list = service.findAll();
		return Response.status(201).entity(list).build();
	}
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProfile(@PathParam("id") int id) {
		try {
			Profile profile = service.find(id);
			return Response.status(200).entity(profile).build();
		} catch(ProfileNotFoundException e) {
			String message = e.getMessage();
			Map<String, String> errorMap = Map.of("message", message); // message = Profile with an id not found 
			return Response.status(404).entity(errorMap).build();
		}
	}
}
