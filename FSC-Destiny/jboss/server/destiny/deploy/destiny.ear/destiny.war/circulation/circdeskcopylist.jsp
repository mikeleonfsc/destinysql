<%@ page language="java" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/destiny-base.tld" prefix="base" %>

<%@ page import="org.apache.struts.util.*" %>
<%@ page import="com.follett.fsc.common.*" %>
<%@ page import="com.follett.fsc.destiny.client.circulation.servlet.*" %>
<%@ page import="com.follett.fsc.destiny.entity.ejb3.BibMasterSpecs" %>
<%-- I18n Support --%>
<%@ page import="com.follett.fsc.common.MessageHelper"%>
<%@ page import="com.follett.fsc.common.LocaleHelper"%>


<%
	String formName = request.getParameter("formName");
	boolean showSiteName = ("true".equals(request.getParameter("showSiteName")));
	ICircDeskCopyList form = (ICircDeskCopyList)request.getAttribute(formName);
%>

	<logic:iterate indexId="flipper" id="row" name="<%= formName %>" property="list" type="com.follett.fsc.destiny.session.circulation.data.CircDeskCopyVO">
	  <logic:equal name="flipper" value="0">
	            <tr>
	                <td class="SmallColHeading"><%= MessageHelper.formatMessage("circdeskcopylist_Barcode") %></td>
	                <td class="SmallColHeading"><%= MessageHelper.formatMessage("circdeskcopylist_Status") %></td>
				<% if (form.isTextbookMode() || (form.getCollectionType() == BibMasterSpecs.COLLECTION_TYPE_ASSET)) { %>
	                <td class="SmallColHeading">Condition</td>
	                <td class="SmallColHeading">
                    <% if ( form.getCollectionType() == BibMasterSpecs.COLLECTION_TYPE_ASSET ) {%>
                       Home
                    <% } %> Location	                
	                </td>
				<% } else { %>
	                <td class="SmallColHeading"><%= MessageHelper.formatMessage("circdeskcopylist_Call") %></td>
				<% } %>
				
				<% if ( showSiteName ) { %>
					<td class="SmallColHeading"><%= MessageHelper.formatMessage("circdeskcopylist_Site") %></td>
				<% } %>
				
	            </tr>
      </logic:equal>
				<tr valign="top" <%=( ( (1 & flipper.intValue())==0)? "bgColor=\"#E8E8E8\"" : "" )%> >
					<%-- BARCODE (COLUMN 1) --%>
	                <td class="ColRow">
					<% if (StringHelper.isEmpty(row.getBarcode())) { %>
						&nbsp;</td>
					<% } else { %>
						<a href="<%= form.getCircDeskCopyURL(row) %>"><%= ResponseUtils.filter(row.getBarcodeDisplayable()) %></a></td>
	                <% } %>
					<%-- STATUS (COLUMN 2) --%>
	                <td class="ColRow">
						<%= ResponseUtils.filter(row.getStatus()) %>
	                </td>
				<% if (form.isTextbookMode() || (form.getCollectionType() == BibMasterSpecs.COLLECTION_TYPE_ASSET)) { %>
					<%-- CONDITION (COLUMN 3) --%>
	                <base:td clazz="ColRow" filtered="true"><%= row.getCondition() %></base:td>
					<%-- LOCATION (COLUMN 4) --%>
	                <base:td clazz="ColRow" filtered="true"><%= row.getLocation() %></base:td>
				<% } else { %>
					<%-- CALL NUMBER (COLUMN 3) --%>
					<% if(row.getCallNumber()!=null) { %>
		                <base:td clazz="ColRow" filtered="true"><%= row.getCallNumber() %></base:td>
		            <% } else { %>
		                <td>&nbsp;</td>
		            <% } %>
				<% } %>
				
				<% if ( showSiteName ) { %>
					<td class="ColRow">
					<% if ( row.getSiteName() != null ) { 
					    out.println(ResponseUtils.filter(row.getSiteName()));
					} else {
					    out.println("&nbsp;");
					}
					%>
					</td>
				<% } %>
				</tr>
    </logic:iterate>
