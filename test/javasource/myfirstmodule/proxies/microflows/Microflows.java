// This file was generated by Mendix Modeler 7.11.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the MyFirstModule module
	public static myfirstmodule.proxies.Entity gET_Object(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			IMendixObject result = (IMendixObject)Core.execute(context, "MyFirstModule.GET_Object", params);
			return result == null ? null : myfirstmodule.proxies.Entity.initialize(context, result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
}