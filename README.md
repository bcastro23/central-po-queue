# central-po-queue
Central Purchase Order queue

Business case

Purchase orders are created from requisitioning users from a non-central system (web application) and then orders are entered manually into Centralized ERP system to create real Purchase Order (document posted).
Now due to increased number of orders from non-central system it is required to automate the creation of the PO posting within ERP system.
Since central ERP system does not have access to distributed web app it is required to create an API app that will hold every order created from distributed system and then ERP central system will fetch those orders and will post them into the system. This interface will work as a queue between non-posted and posted documents.
Since document posting in ERP central system requires a lot of business validation and knowledge which is already built-in, makes no sense to post the documents from an external source.


Orders submitted will contain following data
---------------------------------------------------------------------------------------------------------------------------
Portal Fields	    Type	    Length	    Special Instructions                                                              |
---------------------------------------------------------------------------------------------------------------------------
Order Number	    Number	  10 max	    Cannot be a duplicate | Alpha numeric
Material No	      Number	  8	          Material numbers will be same between distributed and central system. Digits only
Description	      Char	    40 max	 
Quantity	        Number	  13 max	    Whole numbers only
Unit of Measure	  Char	    2	
Facility Name	    Char	    40 max	 
Address	          Char	    60 max	    Street Address
City	            Char	    40 max	 
Postal Code	      Char	    7	          ###-### format required
Status            Char      1           blank:recently added, 'P':posted, 'E':error while posting
---------------------------------------------------------------------------------------------------------------------------


Technical details:
RESTful API for Orders queue.
This API will validate only the inputs based on Special Instructions and will store the data into the queue.
The API is not validating if Order number, material number, unit of measure, address or other data is valid or not, it will only validate format based on instructions from column ‘Special instructions.
Methods POST and GET will be implemented for release 1 (v1).

<base url>/Orders

During POST, data is validated according to instructions above and data is stored into Central-PO-queue.
During GET, data is retrieved to requester.


