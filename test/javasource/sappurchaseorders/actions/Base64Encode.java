// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package sappurchaseorders.actions;

import org.apache.commons.codec.binary.Base64;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;

public class Base64Encode extends CustomJavaAction<java.lang.String>
{
	private java.lang.String value;

	public Base64Encode(IContext context, java.lang.String value)
	{
		super(context);
		this.value = value;
	}

	@Override
	public java.lang.String executeAction() throws Exception
	{
		// BEGIN USER CODE
		if (value == null)
			return null;
		return new String(Base64.encodeBase64(value.getBytes()));
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@Override
	public java.lang.String toString()
	{
		return "Base64Encode";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
